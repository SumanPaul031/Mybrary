// import * as FilePond from 'filepond';

// FilePond.registerPlugin(
//     FilePondPluginImagePreview,
//     FilePondPluginImageResize,
//     FilePondPluginFileEncode,
// )

FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginImageResize);
FilePond.registerPlugin(FilePondPluginFileEncode);

const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(inputElement);

Filepond.parse(document.body)