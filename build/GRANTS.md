# Grants

Every act of the four stages, with what it needs, by name only (GRANTS §2; PERMISSIONS §10). Gathered before the first tranche; the owner gives what only he can at one sitting.

## Develop

| act | service and host | credential or access (name only) | where the product uses it |
| --- | --- | --- | --- |
| push to the session's own branch; open and merge the seed pull request | GitHub, api.github.com | the Claude GitHub app's token, injected by the session's proxy | the hooks and `proc` |
| the standing list | this repository's `.claude/settings.json` | Bob's approval of PERMISSIONS §6, written by `proc shims` | every session |

## Test

| act | service and host | credential or access (name only) | where the product uses it |
| --- | --- | --- | --- |
| run the module's tests | none (Node, local) | none | `node --test greet/test/*.test.mjs` |

## Deploy a development release

| act | service and host | credential or access (name only) | where the product uses it |
| --- | --- | --- | --- |
| none: the throwaway is never deployed | — | — | — |

## Exercise a release

| act | service and host | credential or access (name only) | where the product uses it |
| --- | --- | --- | --- |
| none: the throwaway is never released | — | — | — |
