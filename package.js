Package.describe({
    summary: "Provides trianglify.js."
});

Package.on_use(function(api) {
    api.use('d3', 'client');
    api.add_files('client/trianglify.js', 'client');
});