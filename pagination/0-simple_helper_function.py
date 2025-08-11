#!/usr/bin/env python3
""" Simple helper function """
from typing import List


def index_range(page: int, page_size: int) -> List[int]:
    """
    function named index_range that takes two
    integer arguments page and page_size
    """
    debut = (page - 1) * page_size
    fin = debut + page_size
    return (debut, fin)
