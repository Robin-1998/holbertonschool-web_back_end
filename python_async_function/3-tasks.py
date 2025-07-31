#!/usr/bin/env python3
"""
Project Holberton -
3.Tasks
"""


import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int):
    """
        function that takes an integer max_delay and returns a asyncio.Task.
    """
    return asyncio.create_task(wait_random(max_delay))
    # asyncio.create_task permet de démarrer la coroutine
    # wait_random immédiatement.
    # et ça retourne une tâche (asyncio.Task) que tu peux suivre,
    # attendre, ou ignorer. Dans notre cas on l'utilisera dans le main pour
    # retourne la asyncio.task seulement

    # NOTEE :La tâche est comme une "boîte d’exécution" qui contient le
    # travail, tourne en fond, et que tu peux attendre plus tard si tu
    # veux le résultat.
