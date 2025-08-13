#!/usr/bin/env python3
"""
Change school topics
"""
import pymongo


def update_topics(mongo_collection, name, topics):
    """
    function that changes all topics of a school document based on the name
    """
    result = mongo_collection.update_one(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    return result.modified_count
# modified.count permet de voir le nombre de documents modifiés
