import React from 'react';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>AI</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite AI and systems projects I have worked on
                over the last few years.
            </p>

            <br />

            <div className="text-block">
                <h2>VectorDB</h2>
                <br />

                <p>
                    VectorDB is a fully working vector database built from scratch in
                    C++, combining fundamental data structures and similarity-search
                    algorithms with modern AI workflows. The project implements
                    HNSW, KD-Tree, and Brute Force search side-by-side, allowing their
                    performance and behavior to be directly compared.
                </p>

                <br />

                <p>
                    The system supports cosine similarity, Euclidean distance, and
                    Manhattan distance, along with a live PCA visualization of
                    semantic vector space. It can also generate real 768-dimensional
                    embeddings from documents using Ollama and the
                    <b> nomic-embed-text </b> model, storing them in an HNSW index for
                    semantic retrieval.
                </p>

                <br />

                <p>
                    On top of the vector database, I built a complete RAG pipeline
                    where user questions are embedded, relevant document chunks are
                    retrieved through HNSW, and a local LLM generates an answer based
                    on the retrieved context. The project also exposes a REST API for
                    insertion, deletion, search, benchmarking, document management,
                    and RAG queries.
                </p>

                <br />

                <h3>Tech Stack:</h3>
                <ul>
                    <li>
                        <p><b>C++17</b> - Core vector database implementation</p>
                    </li>
                    <li>
                        <p><b>HNSW</b> - Approximate nearest-neighbor search</p>
                    </li>
                    <li>
                        <p><b>KD-Tree</b> - Exact spatial search</p>
                    </li>
                    <li>
                        <p><b>Brute Force</b> - Exact baseline search</p>
                    </li>
                    <li>
                        <p><b>Ollama</b> - Local embedding and language models</p>
                    </li>
                    <li>
                        <p><b>RAG</b> - Context retrieval and AI generation pipeline</p>
                    </li>
                    <li>
                        <p><b>REST API</b> - Vector, document, benchmark, and RAG endpoints</p>
                    </li>
                </ul>

                <br />

                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/VishalVab01/VectorDB"
                        >
                            <p>
                                <b>[GitHub]</b> - VectorDB Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>What makes VectorDB interesting?</h2>
                <br />

                <p>
                    Instead of relying on an existing vector database, the core search
                    engine is implemented from scratch. The project demonstrates how
                    approximate nearest-neighbor indexing works internally and makes
                    the trade-offs between HNSW, KD-Tree, and brute-force search
                    directly observable through benchmarking.
                </p>

                <br />

                <p>
                    The system bridges low-level systems programming with practical
                    AI engineering by combining custom vector indexing, semantic
                    search, local embeddings, and retrieval-augmented generation into
                    a single application.
                </p>
            </div>
        </div>
    );
};

export default MusicProjects;