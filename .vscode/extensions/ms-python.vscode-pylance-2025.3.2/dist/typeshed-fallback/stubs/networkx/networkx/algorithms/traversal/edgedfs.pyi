from _typeshed import Incomplete
from collections.abc import Generator

from networkx.utils.backends import _dispatchable

@_dispatchable
def edge_dfs(
    G, source: Incomplete | None = None, orientation: Incomplete | None = None
) -> Generator[Incomplete, None, Incomplete]: ...
