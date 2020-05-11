var aceEditorInstance = ace.edit("editor1");

aceEditorInstance.setTheme("ace/theme/monokai");
aceEditorInstance.setShowPrintMargin(false);
// inline must be true to syntax highlight PHP without opening <?php tag
aceEditorInstance.getSession().setMode({
    path: "ace/mode/mysql",
    inline: true
});
aceEditorInstance.setOptions({
    fontSize: "1em"
});