// A file is required to be in the root of the /src directory by the TypeScript compiler
 const script = document.createElement("script");
    script.src = "./webparts/tinyMce/assets/js/tinymce/tinymce.min.js";
    script.async = true;
    document.body.appendChild(script);