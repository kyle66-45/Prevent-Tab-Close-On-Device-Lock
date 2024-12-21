// Override native close methods
Object.defineProperty(window, 'close', {
    value: function() {
        window.location.reload();
    },
    writable: false,
    configurable: false
});

// Override tab close method
if (window.tab) {
    Object.defineProperty(window.tab, 'close', {
        value: function() {
            window.location.reload();
        },
        writable: false,
        configurable: false
    });
}

// Capture close attempts and force refresh
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    window.location.reload();
    return false;
});

// Override Ctrl+W behavior
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key === 'w') || 
        (e.altKey && e.key === 'F4')) {
        e.preventDefault();
        window.location.reload();
    }
}, true);
