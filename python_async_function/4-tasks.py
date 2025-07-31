#!/usr/bin/env python3
"""
Project Holberton -
4.Tasks The code is nearly identical
to wait_n except task_wait_random is being called.
"""


import asyncio
from typing import List
wait_random = __import__('1-concurrent_coroutines').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    task_wait_random calls and returns list of delays as they are completed
    """
    delays = []
    tasks = [wait_random(max_delay) for _ in range(n)]

    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)

    return delays
