# Implicit vs. Explicit

## Implicit

Single-line:

```
const implicit = (p) => p;
```

Multi-line:

```
const implicit = (p) => (
  p;
)
```

Single or multi-line, returning objects:

```
const implicit = () => (
      { value: 1 };
)
```

## Explicit

Single-line:

```
const explicit = (p) => { return p; }
```

Multi-line:

```
const explicit = (p) => {
      return p;
}
```
