#!/usr/bin/env python3
""" Simple helper function """
import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> List[int]:
    """
    function named index_range that takes two
    integer arguments page and page_size
    """
    debut = (page - 1) * page_size
    fin = debut + page_size
    return (debut, fin)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ Simple pagination """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        debut, fin = index_range(page, page_size)
        dataset = self.dataset()
        if debut >= len(dataset):
            return []
        return dataset[debut:fin]
