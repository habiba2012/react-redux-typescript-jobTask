# To install dependencies run

npm install

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#Technology/libraries used:
1.React, React hook, react functional component
2.Redux, redux-thunk,redux-devtools-extension, react context 3. Typescript

#Used 'uuid':
uuid or the Universally unique identifier. In the requirement specification file that you provided me with it says we should use the field_key and when you are creating a new field you only provide the name so I've implemented the uuid to be the field_key for the newly created fields.
Each field has a "field_key" from which you choose the field in the select box, but newly created fields, which are not in the data.json file, don't have the "field_key" so we have to create one for them. The random text is the "field_key" for the newly created fields.

I have completed all the requirements according to requirement specification.
*Wrote a function which is able to fetch data in react component from very nested data.The function is recursive so it calls itself every time you create even more nested data
*Implemented drag and drop functionality for options
\*A function which can evaluate rules for a specific field by field data
# react-redux-typescript-jobTask
