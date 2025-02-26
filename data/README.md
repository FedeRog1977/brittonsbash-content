# Data Structure

The following is currently not the case, due to a naive approach when first constructing this data.

In the future, most data entries will follow the structure of:

```json
{
  "title": "",
  "description": "",
  "content": [],
  "href": "",
  "tags": []
}
```

If there is any more random, keyless, data nested further into the hierarchy, it also follows the `title`, `content` structure, giving the `content` a use case for supporting an array of objects or an array of strings.

This means that the generic type used to receive data of any sort is:

```ts
type DataContentResponse = {
  title?: string;
  description?: string;
  content: string | string[] | {}[];
  href?: string;
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

## Stated vs. Stated "Types"

When parsing my data, you may come across sections, for example, "Glassware" and "Glassware Types". If a section does not include "Types", this means it is preferential, and includes a non-exhaustive list of products, etc., which I have acknowledged or acquired. If something is labeled with "Types", the following list is exhaustive and includes possible categorizations of the associated products. In any given data, one of these sections may exist without the other, or together.

## Special Characters

Characters such as the Unicode compiled special characters should not appear in this repository. `strings` containing special characters should use the plain-text equivalent which are then compiled when passed through `Typography` with the `markdown` prop. Anytime a `&.*;` is used, it should be manual and in-code, that is not in body text strings.

Find more on Unicode characters here: https://www.compart.com/en/unicode/

## Media Tags

The media JSON is the perfect example of the use of the `tags` key. Films, and other media etc., are arranged on the top level with the following tags determining their nature:

```json
"tags": [
  "<year-of-release>",
  "<genre>",
  "<production-company>",
  "<actor>",
  "<artist>",
  "...",
]
```
