# CineVault Class Diagram

Paste the Mermaid code below into https://mermaid.live, then export it as PNG or PDF for submission.

```mermaid
classDiagram
    class MediaItem {
        +String id
        +String title
        +String description
        +Number releaseYear
        +String genre
        +Number rating
        +String poster
        +String backdrop
        +String type
        +getSummary()
    }

    class Movie {
        +Number duration
        +getDuration()
    }

    class Series {
        +Number seasons
        +getEpisodeInfo()
    }

    class Watchlist {
        -MediaItem[] items
        +addItem(item)
        +removeItem(id)
        +hasItem(id)
        +getItems()
    }

    MediaItem <|-- Movie : inherits
    MediaItem <|-- Series : inherits
    Watchlist o-- "0..*" MediaItem : stores
```

## How the diagram maps to the app

- **MediaItem** is the shared parent model for common title information.
- **Movie** inherits `MediaItem` and adds `duration`.
- **Series** inherits `MediaItem` and adds `seasons`.
- **Watchlist** stores media objects and provides add, remove, and lookup behavior.
- `mediaData.js` creates `Movie` and `Series` instances. React components render those objects dynamically rather than repeating title information in JSX.
