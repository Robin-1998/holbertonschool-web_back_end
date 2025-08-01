#!/usr/bin/env python3
""" Project Holberton - 1. Async Comprehensions """


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> float:
    """
    The coroutine will collect 10 random numbers using
    an async comprehensing over async_generator
    """
    return ([i async for i in async_generator()])
# on retourne 10 nombre aléatoire (représenter par i) en utilisant la fonction
# précèdente qui boucle déjà 10 chiffre aléatoire
