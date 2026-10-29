# greet — requirements

**Status** · The throwaway's one module (requirements/README.md).

## Public

### Purpose

A greeting by name (canon: Vision).

### Provides

**greet(name) → string**
- **R1** Returns `Hello, <name>!` for a non-empty string `name` (canon: Initial requirements 1).
- **R2** Throws a `TypeError` for anything that is not a non-empty string; nothing is coerced (canon: Initial requirements 2).

## Private

### Uses

None.

### Invariants

- **R3** Pure: no state, no input or output.

### Satisfies

- requirements/README.md: Vision; Initial requirements 1 and 2.
