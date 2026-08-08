# Server Monitoring Stack

A containerized monitoring stack for observing Linux server health and performance using Prometheus, Node Exporter, and Grafana.

The project demonstrates a practical observability workflow: collecting host-level metrics, storing them as time-series data, and exposing them through a Grafana dashboard.

## Architecture

```mermaid
flowchart LR
    A[Linux Host] --> B[Node Exporter]
    B -->|Metrics| C[Prometheus]
    C -->|PromQL| D[Grafana]
    D --> E[Monitoring Dashboard]
```

## Dashboard

![Grafana Server Monitoring Dashboard](screenshots/grafna.png)

The Grafana dashboard provides an overview of the Linux host's CPU, memory, disk, network, load, and uptime metrics.