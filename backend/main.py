from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[dict]
    edges: List[Edge]


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


#  MAIN ENDPOINT
@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    #  Build graph
    graph = {node['id']: [] for node in nodes}

    for edge in edges:
        graph[edge.source].append(edge.target)

    #  Detect cycle (DFS)
    visited = set()
    rec_stack = set()

    def dfs(node):
        if node in rec_stack:
            return True
        if node in visited:
            return False

        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph[node]:
            if dfs(neighbor):
                return True

        rec_stack.remove(node)
        return False

    is_dag = True
    for node in graph:
        if dfs(node):
            is_dag = False
            break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }