/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import * as React from "react";
import { useEffect, useState } from 'react';
import tinymce from 'tinymce/tinymce';
require("tinymce/plugins/template");
require("tinymce/plugins/advlist");
require("tinymce/plugins/lists")
require("tinymce/plugins/link");
require("tinymce/plugins/table");
require("tinymce/models/dom")
require("tinymce/themes/silver");
require("tinymce/icons/default");
require("tinymce/plugins/save");
require("tinymce/skins/content/default/content.min.css");
require("tinymce/skins/ui/oxide/skin.min.css");
require("tinymce/skins/ui/oxide/content.min.css");
// require("tinymce/plugins/autosave");
const Test = (props: any) => {
    // const editorRef = useRef(null);
    const [initialContent, setInitialContent] = useState(null);
    console.log(props.initialContent);
    useEffect(() => {
        setInitialContent(props.initialContent);
    }, [props.initialContent])



useEffect(()=> {
    console.log(initialContent);
},[initialContent])

    const handleChange = () => {
        const contentSaved = tinymce.activeEditor.getContent();
        props.saveInput(contentSaved);
    }


    const setTmc = async () => {
        await tinymce.init({
            selector: '#myTextarea',
            menubar: false,
            promotion: false,
            plugins: ['link', 'table', 'save'],
            toolbar: 'save undo redo | blocks fontsize fontfamily | forecolor backcolor table',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif;font-size:14px;}',
            save_onsavecallback: function () {
                handleChange();
            },
            setup: function (ed) {
                ed.on("init", function () {
                        if(props.initialContent != null){

                            ed.setContent(props.initialContent);
                        }
                })
                ed.on("change", function () {
                    handleChange();
                });
                ed.on("keyup", function () {
                    handleChange();
                });
            }
        });
    }
    useEffect(() => {
        if (props.initialContent) {
            setTmc().catch((error) => console.log(error));
        }
    }, []);

    return (
        <div>
            <textarea id="myTextarea" />
            {/* <button onClick={handleChange}>save me</button> */}
        </div>
    );
};

export default Test;