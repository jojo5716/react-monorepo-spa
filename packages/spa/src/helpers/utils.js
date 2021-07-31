function mergeObject(object1, object2) {
    return { ...object1, ...object2 };
}

function isEmpty(value) {
    return (
        value == null
        || (typeof value === 'object' && Object.keys(value).length === 0)
        || (typeof value === 'string' && value.trim().length === 0)
    );
}

function hasObjectProperty(object, propertyName) {
    return object && Object.prototype.hasOwnProperty.call(object, propertyName);
}

function arePropsValidWithoutError(props) {
    const hasPropsDataProperty = hasObjectProperty(props, 'data');

    return !(isEmpty(props)) && ((hasPropsDataProperty && props.data && !(props.error)) || !hasPropsDataProperty);
}

function getObjectAttribute(objectInstance, attributeName, defaultValue = undefined) {
    return (objectInstance && objectInstance[attributeName]) ? objectInstance[attributeName] : defaultValue;
}

function defaultEmptyfunction() { /* Comment to avoid SonarQube */ }

export default {
    arePropsValidWithoutError,
    defaultEmptyfunction,
    getObjectAttribute,
    isEmpty,
    mergeObject,
};
