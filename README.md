<img width="1160" height="915" alt="book-dash2" src="https://github.com/user-attachments/assets/b17ea095-f247-4204-b6c0-ddff66007113" />
# Web Development Project 5 - *BookDash*

Submitted by: **Victoria Zhunio**

This web app: **is a book dashboard that fetches live data from the Open Library API and displays it as a searchable, filterable catalog. Users can browse a list of books from the API, see a summary of statistics, search by title, author, or year, and filter results by language.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - Total number of volumes in the collection 
    - Total number of unique Languages displayed in the catalog 
    - Oldest publication among fetched books 
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] Clickable, stateful bottom navigation bar with an active-tab highlight
* [x] Language codes from the API (e.g. "eng", "fre") are mapped to full readable language names (e.g. "English", "French")

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img width="1160" height="915" alt="book-dash2" src="https://github.com/user-attachments/assets/35eff218-6730-40ec-afc7-d6d1a129168f" />


<img src='https://i.imgur.com/T9gJ0ej.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' /> 

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif and Imgur 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright [2026] [Victoria Zhunio]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

---

# Web Development Project 6 - *Book Dash Part 2*

Submitted by: **Victoria Zhunio**

This web app: **Builds upon the core book dashboard by adding multi-page routing with React Router. Users can now click individual books and view book specific details. The app also lets users view insights on all book data and an about page.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [ ] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [ ] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

  
The following **additional** features are implemented:

* [x] Integrated the native `Intl.DisplayNames` localized browser engine to dynamically translate cryptographic API ISO 3-letter language abbreviations (`eng`, `fre`, `spa`) into reader-friendly full names, creating flawless synchronization between data rows and selection filters completely free of static hardcoding.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/TZe0gtx.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif and Imgur 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
**API Payloads and Query Strictness:** Overcame an Open Library API limitation where crucial metadata (like circulation stats) was stripped by default by configuring a targeted &fields= query identifier string to explicitly request the missing data.
* **Dynamic Language Translation Overrides:** Encountered issues formatting localized edition indices where open-source global entries returned generic cluster classifications like `roa` or undocumented code fallbacks (`und`).

## License

    Copyright [2026] [Victoria Zhunio]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
