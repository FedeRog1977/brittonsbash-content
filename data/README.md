# Data Structure

The following is currently not the case, due to a naive approach when first constructing this data.

In the future, most data entries will follow the structure of:

```json
{
  "title": "",
  "content": [],
  "tags": []
}
```

If there is any more random, keyless, data nested further into the hierarchy, it also follows the `title`, `content` structure, giving the `content` a use case for supporting an array of objects or an array of strings.

This means that the generic type used to receive data of any sort is:

```ts
type DataContentResponse = {
  title?: string;
  content: string | string[] | {}[];
  tags?: string[];
};
```

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

# Data Particulars

## `travel.json`

This file is an aggregation of all `features` of holidays I have been on. The data is currently not used, however may one day be represented. Therefore, no duplicates should appear here. For example, there may be a recurring shop throughout different holidays, they may occur individually as part of their according `features` list, they of course will only occur once here however.

Additionally, most of the objects contained within the `entries` of `travel` may, but are not required to, appear withing the `features` of any given `entry` in `events`. The object with title "Cities (To-Do)" is the only one which may not appear in the `event`-specific `feature`.

Exhaustive possible entries are defined in the following list:

- Cities
- Districts
- Attractions
- Accommodation
- Supermarkets
- Shops
- Consumables
- Cafés
- Bakeries
- Gelaterias
- Restaurants
- Bars
- Nostalgia Effect

## Stated vs. Stated "Types"

When parsing my data, you may come across sections, for example, "Glassware" and "Glassware Types". If a section does not include "Types", this means it is preferential, and includes a non-exhaustive list of products, etc., which I have acknowledged or acquired. If something is labeled with "Types", the following list is exhaustive and includes possible categorizations of the associated products. In any given data, one of these sections may exist without the other, or together.
