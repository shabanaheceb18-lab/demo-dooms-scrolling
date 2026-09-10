This project is about to practice the optimizing the list item when expected list size > 100 using the cdk visual scrolling concept.

source url from kaggle: https://www.kaggle.com/datasets/harpartapsingh13/sleep-and-doomscrolling-habits-dataset

implementation: find the metadata from the local then display it in browser using the http and papaparse.

# DoomingHabit

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.23.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

comparison of the listing the records with the cdk-virtual-scroll-viewport:

<img width="1409" height="729" alt="Screenshot 2026-09-10 at 7 53 17 AM" src="https://github.com/user-attachments/assets/bc4dc2e8-eb92-4edd-ac2d-88c9ab98b26a" />
memory sizing:
<img width="1415" height="738" alt="memory-size-with-cdk" src="https://github.com/user-attachments/assets/a4c1f712-a0fc-4d72-b270-d150eb1e9c8f" />

comparison of the listing the records without the cdk-virtual-scroll-viewport:

<img width="1406" height="738" alt="implementation-wo-cdk" src="https://github.com/user-attachments/assets/d02cbe42-f025-48dd-be1d-37aeb884b6f7" />
memory sizing:
<img width="1421" height="736" alt="memory-size-wo-cdk" src="https://github.com/user-attachments/assets/9c8d7ea5-9a73-4004-a207-7272f1b2ae04" />




