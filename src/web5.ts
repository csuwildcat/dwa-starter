import { Web5 } from '@tbd54566975/web5';

export const web5 = new Web5();

export async function didCreate() {
  const did = await web5.did.create('ion');
  return did;
}

export async function didRegister(did: object) {
  await web5.did.manager.set(did.id, {
    connected: true,
    endpoint: 'app://dwn',
    keys: {
      ['#dwn']: {
        keyPair: did.keys.find(key => key.id === 'dwn').keyPair,
      },
    },
  });
}

export async function dwnRequestPNGPermissions(did: object) {
  const result = await web5.dwn.permissions.request(did.id, {
    author: did.id,
    message: {
      description: 'Access to PNGs',
      scopes: [
        { interface: web5.dwn.sdk.DwnInterfaceName.Records, method: web5.dwn.sdk.DwnMethodName.Write, dataFormat: 'image/png' },
        { interface: web5.dwn.sdk.DwnInterfaceName.Records, method: web5.dwn.sdk.DwnMethodName.Query, dataFormat: 'image/png' },
        { interface: web5.dwn.sdk.DwnInterfaceName.Records, method: web5.dwn.sdk.DwnMethodName.Read, dataFormat: 'image/png' },
        { interface: web5.dwn.sdk.DwnInterfaceName.Records, method: web5.dwn.sdk.DwnMethodName.Delete, dataFormat: 'image/png' },
      ],
    },
  });
  return result;
}

export async function dwnWritePNGRecord(did: object, data: Uint8Array) {
  const result = await web5.dwn.records.write(did.id, {
    author: did.id,
    data,
    message: {
      dataFormat: 'image/png',
    },
  });
  return result;
}

export async function dwnQueryPNGRecords(did: object) {
  const result = await web5.dwn.records.query(did.id, {
    author: did.id,
    message: {
      filter: {
        dataFormat: 'image/png',
      },
    },
  });
  return result;
}

export async function dwnReadDataFromRecordWithId(did: object, recordId: string) {
  const result = await web5.dwn.records.read(did.id, {
    author: did.id,
    message: {
      recordId,
    },
  });
  return result;
}

export async function dwnDeleteRecordWithId(did: object, recordId: string) {
  const result = await web5.dwn.records.delete(did.id, {
    author: did.id,
    message: {
      recordId,
    },
  });
  return result;
}
