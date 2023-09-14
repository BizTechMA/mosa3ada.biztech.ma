# Requests and aid calls cleaning

The cleaning notebook contains 2 parts of cleaning:

### Firestore elements:

Firestore document contains the main elements displayed on the website. An aid call is valid only if it satisfies one of the following criteria:

- Has a valid geographical coordinates: a valid longitude, latitude
- Has a non-empty city and location

### Requests:

The second script cleans the requests mentioned in: https://huggingface.co/spaces/nt3awnou/Nt3awnou-rescue-map. It normalize the address, deduplicate it, and keep only the latest record per douar/village

## How to run the notebook

- First, you need to have python>3.8 installed in your machine
- Since the script is simple, no requirements need to be installed. Just follow the steps in the notebook