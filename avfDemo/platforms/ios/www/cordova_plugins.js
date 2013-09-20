cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.core.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.core.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.core.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.device-orientation/www/compass.js",
        "id": "org.apache.cordova.core.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.core.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.core.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.core.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.core.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/Position.js",
        "id": "org.apache.cordova.core.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.core.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.core.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.core.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.camera/www/Camera.js",
        "id": "org.apache.cordova.core.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.camera/www/ios/CameraPopoverHandle.js",
        "id": "org.apache.cordova.core.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.dialogs/www/notification.js",
        "id": "org.apache.cordova.core.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.vibration/www/vibration.js",
        "id": "org.apache.cordova.core.vibration.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.core.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.contacts/www/contacts.js",
        "id": "org.apache.cordova.core.contacts.contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.contacts/www/Contact.js",
        "id": "org.apache.cordova.core.contacts.Contact",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.contacts/www/ContactAddress.js",
        "id": "org.apache.cordova.core.contacts.ContactAddress",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.contacts/www/ContactError.js",
        "id": "org.apache.cordova.core.contacts.ContactError",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.contacts/www/ContactField.js",
        "id": "org.apache.cordova.core.contacts.ContactField",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.contacts/www/ContactFindOptions.js",
        "id": "org.apache.cordova.core.contacts.ContactFindOptions",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.contacts/www/ContactName.js",
        "id": "org.apache.cordova.core.contacts.ContactName",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.contacts/www/ContactOrganization.js",
        "id": "org.apache.cordova.core.contacts.ContactOrganization",
        "clobbers": [
            "ContactOrganization"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.contacts/www/ios/contacts.js",
        "id": "org.apache.cordova.core.contacts.contacts-ios",
        "merges": [
            "navigator.contacts"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.contacts/www/ios/Contact.js",
        "id": "org.apache.cordova.core.contacts.Contact-iOS",
        "merges": [
            "Contact"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.inappbrowser/www/InAppBrowser.js",
        "id": "org.apache.cordova.core.inappbrowser.InAppBrowser",
        "clobbers": [
            "window.open"
        ]
    }
]
});