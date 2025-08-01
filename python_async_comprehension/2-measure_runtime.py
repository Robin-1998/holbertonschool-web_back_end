#!/usr/bin/env python3
""" Project Holberton - 2. Run time for four parallel comprehensions """


import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """ Run time for four parallel comprehensions """
    result = time.perf_counter()
# perf_counter permet de retourner le temps écoulé en secondes depuis un point
# de départ, en l'occurence ici avec la variable result

    results = await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )

# On exécute async_comprehension 4 fois en parallèle en utilisant
# asyncio.gather

    final = time.perf_counter() - result
    return final
