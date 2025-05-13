# CarbonawareScheduler

Types:

- <code><a href="./src/resources/top-level.ts">RetrieveResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">retrieve</a>() -> RetrieveResponse</code>

# Schedule

Types:

- <code><a href="./src/resources/schedule.ts">CloudZone</a></code>
- <code><a href="./src/resources/schedule.ts">ScheduleOption</a></code>
- <code><a href="./src/resources/schedule.ts">ScheduleCreateResponse</a></code>

Methods:

- <code title="post /v0/schedule/">client.schedule.<a href="./src/resources/schedule.ts">create</a>({ ...params }) -> ScheduleCreateResponse</code>

# Regions

Types:

- <code><a href="./src/resources/regions.ts">RegionListResponse</a></code>

Methods:

- <code title="get /v0/regions/">client.regions.<a href="./src/resources/regions.ts">list</a>() -> RegionListResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>
