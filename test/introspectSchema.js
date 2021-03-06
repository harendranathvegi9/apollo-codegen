import chai, { expect } from 'chai'
import { readFileSync } from 'fs'
import { join } from 'path'

import { introspect } from '../src/introspectSchema';

describe('Introspecting GraphQL schema documents', () => {
  it(`should generate valid introspection JSON file`, async () => {
    const schemaContents = readFileSync(join(__dirname, './starwars/schema.graphql')).toString();
    const expected = readFileSync(join(__dirname, './starwars/schema.json')).toString();

    const schema = await introspect(schemaContents);

    expect(JSON.stringify(schema, null, 2)).to.be.equal(expected);
  });
})