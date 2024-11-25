# Okta Integration

Okta Integration using the `./scim-server` demo.

![alt text](image.png)

---

| Field (Dot Notation)                                                           | Value                                                              | Mapped |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ------ |
| id                                                                             | 2819c223-7f76-453a-919d-413861904646                               | x      |
| externalId                                                                     | 701984                                                             |        |
| userName                                                                       | bjensen@example.com                                                | x      |
| name.formatted                                                                 | Ms. Barbara J Jensen, III                                          |        |
| name.familyName                                                                | Jensen                                                             | x      |
| name.givenName                                                                 | Barbara                                                            | x      |
| name.middleName                                                                | Jane                                                               | x      |
| name.honorificPrefix                                                           | Ms.                                                                | x      |
| name.honorificSuffix                                                           | III                                                                | x      |
| displayName                                                                    | Babs Jensen                                                        | x      |
| nickName                                                                       | Babs                                                               | x      |
| profileUrl                                                                     | https://login.example.com/bjensen                                  | x      |
| emails.*.value                                                                 | bjensen@example.com                                                | x      |
| emails.*.type                                                                  | work                                                               | x      |
| addresses.*.type                                                               | work                                                               | x      |
| addresses.*.streetAddress                                                      | 100 Universal City Plaza                                           | x      |
| addresses.*.locality                                                           | Hollywood                                                          | x      |
| addresses.*.region                                                             | CA                                                                 | x      |
| addresses.*.postalCode                                                         | 91608                                                              | x      |
| addresses.*.country                                                            | USA                                                                | x      |
| addresses.*.formatted                                                          | 100 Universal City Plaza\nHollywood, CA 91608 USA                  | x      |
| phoneNumbers.*.value                                                           | 555-555-5555                                                       |        |
| phoneNumbers.*.type                                                            | work                                                               |        |
| ims.*.value                                                                    | someaimhandle                                                      |        |
| ims.*.type                                                                     | aim                                                                |        |
| photos.*.value                                                                 | https://photos.example.com/profilephoto/72930000000Ccne/F          |        |
| photos.*.type                                                                  | photo                                                              |        |
| userType                                                                       | Employee                                                           | x      |
| title                                                                          | Tour Guide                                                         | x      |
| preferredLanguage                                                              | en-US                                                              | x      |
| locale                                                                         | en-US                                                              | x      |
| timezone                                                                       | America/Los_Angeles                                                | x      |
| active                                                                         | true                                                               | xxx    |
| password                                                                       | t1meMa$heen                                                        | x?      |
| groups.*.value                                                                 | e9e30dba-f08f-4109-8486-d5c6a331660a                               |        |
| groups.*.$ref                                                                  | https://example.com/v2/Groups/e9e30dba-f08f-4109-8486-d5c6a331660a |        |
| groups.*.display                                                               | Tour Guides                                                        |        |
| x509Certificates.*.value                                                       | ...                                                                |        |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.employeeNumber      | 701984                                                             | x      |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.costCenter          | 4130                                                               | x      |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.organization        | Universal Studios                                                  | x      |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.division            | Theme Park                                                         | x      |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.department          | Tour Operations                                                    | x      |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.manager.value       | 26118915-6090-4610-87e4-49d8ca9f808d                               | x      |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.manager.$ref        | ../Users/26118915-6090-4610-87e4-49d8ca9f808d                      |        |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.manager.displayName | John Smith                                                         | x      |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.manager.email       | john.smith@universalstudios.com                                    |        |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.manager.title       | Tour Operations Manager                                            |        |
| meta.resourceType                                                              | User                                                               |        |
| meta.created                                                                   | 2010-01-23T04:56:22Z                                               |        |
| meta.lastModified                                                              | 2011-05-13T04:42:34Z                                               |        |
| meta.version                                                                   | W/"a330bc54f0671c9"                                                |        |
| meta.location                                                                  | https://example.com/v2/Users/2819c223-7f76-453a-919d-413861904646  |        |

