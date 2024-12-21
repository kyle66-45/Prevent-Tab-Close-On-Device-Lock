// Prevent tab closing
            window.onbeforeunload = (e) => {
                e.preventDefault();
                e.returnValue = '';
                this.logAttempt('close');
                return true;
            };
        },
