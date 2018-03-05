
function FileGenerator(componentName) {

  const specContents = `\n/**\n* @jest-environment node\n*/\n\nimport React from 'react';\nimport Enzyme, { shallow, render, mount } from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\nimport ${componentName} from './${componentName}';\n\nEnzyme.configure({ adapter: new Adapter() });`;
  const componentContents = `\nimport React, { Component } from 'react';\nimport './${componentName}.css';\n\nclass ${componentName} extends Component {\n\trender() {\n\t\treturn (\n\t\t);\n\t}\n}\n\nexport default ${componentName}`;

  return {
    spec: specContents,
    component: componentContents
  };
}

module.exports = FileGenerator;