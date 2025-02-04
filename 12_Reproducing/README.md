# Guide to Reproducing

This is a guide to computationally reproducing the project. In a computational reproduction, one is given the original data, code, and computational environment, and uses it to obtain the same results reported in the original work.

We begin by identifying the data, code, and computational environment. The system of record for these artifacts is the GitHub repository at https://github.com/SemanticPriming/SPAML and its associated Releases (https://github.com/SemanticPriming/SPAML/releases/).

The original data can be found at https://github.com/SemanticPriming/SPAML/releases/; a checksum file with md5 hashes of the original data files can be found in `05_Data/checksums/`.

The original code can be found at https://github.com/SemanticPriming/SPAML/releases/; each release contains a versioned archive of the code, signed by its lead author.

A specification for a computational environment in which to run the code can be found in a Code Ocean capsule at https://codeocean.com/capsule/9721856; it provides the data, code, and a computational environment specified in a Docker file, along with the ability to rerun the analyses directly from within the UI there. A Dockerfile for building the computational environment yourself can be found in `06_Reproducing/Dockerfiles/`. The Dockerfiles are also useful because they contain pinned versions of the (non-transitive) dependencies, known to work together, which should help if you are independently recreating a computational environment for running the analysis.

`audit.md` in this directory contains a computational reproducibility audit performed on a pre-release manuscript that informed the approach to reproducibility.
