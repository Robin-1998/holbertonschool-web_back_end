#!/usr/bin/env python3
"""
Project Holberton
Task 6. Complex types - mixed list
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Write a type-annotated function sum_mixed_list which takes a list
    mxd_lst of integers and floats and returns their sum as a float.
    """
    return sum(mxd_lst)

# Union permet de dire que la liste peut contenir des entiers ou des flottants
