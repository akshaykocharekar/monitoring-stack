# Server Monitoring & SLO Stack

A containerized observability project that monitors Linux server health, measures application availability, and implements an SLO-based alerting workflow using Prometheus, Node Exporter, Blackbox Exporter, and Grafana.

The project demonstrates a practical DevOps/SRE monitoring pipeline:

- Host-level metrics collection
- Time-series monitoring with Prometheus
- HTTP availability monitoring
- SLO and error-budget calculation
- Burn-rate alerting
- Grafana visualization
- Failure and recovery testing

## Architecture

```mermaid
flowchart LR
    A[Linux Host] --> B[Node Exporter]
    B --> C[Prometheus]

    H[Express Health Service] --> X[Blackbox Exporter]
    X --> C

    C --> D[Grafana]
    D --> E[Dashboard]
    C --> F[SLO / Error Budget]
    F --> G[Burn Rate Alert]
```

## Screenshots

### Grafana Dashboard

![Grafana Dashboard](screenshots/grafna.png)

### Alert — Normal

![Normal Alert State](screenshots/normal-stage.png)

### Alert — Pending

![Pending Alert State](screenshots/pending-state.png)

### Alert — Firing

![Firing Alert State](screenshots/firing.png)

### Alert — Recovered

![Recovered Alert State](screenshots/attaining-normcy.png)