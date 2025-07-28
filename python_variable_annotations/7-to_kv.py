#!/usr/bin/env python3
"""
Project Holberton
Task 7. Complex types - string and int/float to tuple
"""
from typing import Union


def to_kv (k: str, v: Union[int, float]) -> tuple[str, float]:
    """
    Write a type-annotated function to_kv
    """
    return (k, float(v))
