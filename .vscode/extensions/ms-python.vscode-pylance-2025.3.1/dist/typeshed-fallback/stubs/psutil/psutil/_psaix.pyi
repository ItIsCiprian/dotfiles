from _typeshed import Incomplete
from typing import NamedTuple

from psutil._common import (
    NIC_DUPLEX_FULL as NIC_DUPLEX_FULL,
    NIC_DUPLEX_HALF as NIC_DUPLEX_HALF,
    NIC_DUPLEX_UNKNOWN as NIC_DUPLEX_UNKNOWN,
    AccessDenied as AccessDenied,
    NoSuchProcess as NoSuchProcess,
    ZombieProcess as ZombieProcess,
    conn_to_ntuple as conn_to_ntuple,
    get_procfs_path as get_procfs_path,
    memoize_when_activated as memoize_when_activated,
    usage_percent as usage_percent,
)

__extra__all__: Incomplete
HAS_THREADS: Incomplete
HAS_NET_IO_COUNTERS: Incomplete
HAS_PROC_IO_COUNTERS: Incomplete
PAGE_SIZE: Incomplete
AF_LINK: Incomplete
PROC_STATUSES: Incomplete
TCP_STATUSES: Incomplete
proc_info_map: Incomplete

class pmem(NamedTuple):
    rss: Incomplete
    vms: Incomplete

pfullmem = pmem

class scputimes(NamedTuple):
    user: float
    system: float
    idle: float
    iowait: float

class svmem(NamedTuple):
    total: Incomplete
    available: Incomplete
    percent: Incomplete
    used: Incomplete
    free: Incomplete

def virtual_memory(): ...
def swap_memory(): ...
def cpu_times(): ...
def per_cpu_times(): ...
def cpu_count_logical(): ...
def cpu_count_cores(): ...
def cpu_stats(): ...

disk_io_counters: Incomplete
disk_usage: Incomplete

def disk_partitions(all: bool = ...): ...

net_if_addrs: Incomplete
net_io_counters: Incomplete

def net_connections(kind, _pid: int = ...): ...
def net_if_stats(): ...
def boot_time(): ...
def users(): ...
def pids(): ...
def pid_exists(pid): ...
def wrap_exceptions(fun): ...

class Process:
    pid: Incomplete
    def __init__(self, pid) -> None: ...
    def oneshot_enter(self) -> None: ...
    def oneshot_exit(self) -> None: ...
    def name(self): ...
    def exe(self): ...
    def cmdline(self): ...
    def environ(self): ...
    def create_time(self): ...
    def num_threads(self): ...
    def threads(self): ...
    def net_connections(self, kind: str = ...): ...
    def nice_get(self): ...
    def nice_set(self, value): ...
    def ppid(self): ...
    def uids(self): ...
    def gids(self): ...
    def cpu_times(self): ...
    def terminal(self): ...
    def cwd(self): ...
    def memory_info(self): ...
    memory_full_info: Incomplete
    def status(self): ...
    def open_files(self): ...
    def num_fds(self): ...
    def num_ctx_switches(self): ...
    def wait(self, timeout: Incomplete | None = ...): ...
    def io_counters(self): ...
