import {useState, useEffect, useRef, useCallback} from 'react'

export default function editor() {
  const editorJsRef = useRef(null);
  // const handleSave = useCallback(async () => {
  //   const savedData = await editorJsRef.current.save();
  //   console.log("data", savedData);
  // }, []);
  let id = Date.now() + Math.floor(Math.random() * 1000)
  useEffect(() => {
      const Editorjs = require('@editorjs/editorjs')
      const Header = require('@editorjs/header')
      const List = require('@editorjs/list')
      const Table = require('@editorjs/table')
      // new Editorjs('editorjs')
      new Editorjs({
        holder: 'editorjs', 
        tools: {
          header: Header, 
          list: List,
          table: Table  ,
        },
        // autofocus: true,
        placeholder: 'Let`s write an awesome training!',
        instanceRef: instance => (editorJsRef.current = instance),
      })
  }, [])

  return(
    <>
      <h4>Editor Component Rendered</h4>
      <div id={'editorjs'} ref={editorJsRef}/>
      {/* <button onClick={handleSave}>Save !</button> */}
    </>
  )
}






// import React from 'react';
// import dynamic from 'next/dynamic';

// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header'; 

// const editor = new EditorJS({ 
//   holder: 'editorjs', 

//   tools: { 
//     header: Header, 
//   }, 
// })

// const Editor = () => {
//   // async function loadTools() {
//   //   return Promise.all([import("@editorjs/header"), import('@editorjs/editorjs')]);
//   // }
//   // async function callLoad() {
//   //   return await loadTools();
//   // }
//   // const EditorJS = callLoad();
//   // const Header = callLoad();

//   const EDITOR_JS_TOOLS = {
//     header: Header,
//   }
//   return (
//         // <EditorJs tools={EDITOR_JS_TOOLS}/>
//         <div id={"editorjs"}>aa</div>
//   )
// }

// export default Editor








// import React from 'react';
// import dynamic from 'next/dynamic';
// // import EditorJs from "react-editor-js";
// // @editorjs/editorjs
// // const EditorJs = dynamic(
// //   () => import('react-editor-js').then(mod => mod.Editor),
// //   { ssr: false }
// // )
// // const Header = dynamic(
// //   () => import('@editorjs/header').then(mod => mod.Editor),
// //   { ssr: false }
// // )
// const EditorJs = dynamic(
//   () => import('react-editor-js'),
//   { ssr: false, loading: () => <p>loading editor.js ...</p>, }
// )
// const Header = dynamic(
//   () => import('@editorjs/header'),
//   { ssr: false }
// )

// const Editor = () => {
//   // async function loadTools() {
//   //   return Promise.all([import("@editorjs/header"), import('@editorjs/editorjs')]);
//   // }
//   // async function callLoad() {
//   //   return await loadTools();
//   // }
//   // const EditorJS = callLoad();
//   // const Header = callLoad();

//   const EDITOR_JS_TOOLS = {
//     header: Header,
//   }
//   return (
//     <>  
//         <h2>EDITOR RENDERED</h2>
//         <EditorJs tools={EDITOR_JS_TOOLS} placeholder={`Write from here...`}/>
//     </>
//   )
// }

// export default Editor
