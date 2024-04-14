# Data Usage

| Page                     | Data Sets            |
| ------------------------ | -------------------- |
| Instant Gram             | `events` , `sport`   |
| Sport                    | `sport` , `activity` |
| BrittonsFoodRC           | `culinary`           |
| allroad                  | `automotive`         |
| Aviation                 | `aviation`           |
| Travel                   | `travel`             |
| Gentlemen Who Café       | `travel`             |
| Ricing                   | `computers`          |
| ThinkFlow                | `computers`          |
| Founding Fathers         | n/a                  |
| Panavision Panaflex      | `media`              |
| Miami Vice               | `media`              |
| Graphic Design           | `design`             |
| Facilities And Interiors | `design`             |
| BrittonsNYSERC           | `academia`           |
| Open Dictionary          | `miscellaneous`      |
| Weather                  | `hills` , `regions`  |
| Conquest                 | `hills` , `regions`  |

# Data Integration

In the `brittonsbash` repository, the data found in this directory is called and treated as if it were an API.

Eventually there are plans to implement a GO service which maps the data from database tables and returns them in JSON format, i.e. an actual API. This means there will be no need for change to `brittonsbash` as the call will be the same, with a slightly altered URL.

Calls occur in the top level `@api` directory. When called, the data goes through `getResponse()` which sends the called data to session storage.

The call functions occur under `triggerSession()` in the primary `index.tsx`, meaning the session data is always available. It is fairly lightweight so this is fine practice. Not 100% ideal, but given the versatility of the data, and the small scale of the data and website; fine.

After being called and sent to session storage, before being used all data then goes through some form of compiler in `@scripts/compilers`. This retrieves the data from session storage, sanitizes and formats it according to the use case, and returns it in a variable ready for use when the compiler is called.
