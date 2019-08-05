const QUESTION1 = {
  STORE: [
    {
      input: undefined,
      output: ''
    },
    {
      input: 213,
      output: ''
    },
    {
      input: [],
      output: ''
    },
    {
      input: [
        { a: '1', b: '2', c: '3' },
        { d1: '4', d2: '5' }
      ],
      output: 'a=1;b=2;c=3\nd1=4;d2=5'
    },
    {
      input: [
        { a: '1' , "" : ""}
      ],
      output: 'a=1;'
    },
  ],

  LOAD: [
    {
      input: undefined,
      output: []
    },
    {
      input: '',
      output: []
    },
    {
      input: 'key1=value1;key2=value2\nkeyA=valueA\n',
      output: [
        { key1: 'value1', key2: 'value2' },
        { keyA: 'valueA' }
      ]
    },
    {
      input: '!@#$%^&*()_+#@%$!()@%&*^#!_FEWJL}{|',
      output: []
    },
    {
      input: 'dupkey=value1;dupkey=value2\nkeyA=valueA',
      output: [
        { dupkey: 'value1', dupkey: 'value2' },
        { keyA: 'valueA' }
      ]
    },
    {
      input: '\nkey1=va==lue;key2=val==ue2\n',
      output: [
        { key1: 'va==lue', key2: 'val==ue2' }
      ]
    },
    {
      input: 'key1=va;;;==lue;',
      output: [
        { key1: 'va', '': '=lue' }
      ]
    }
  ],
};

module.exports = { 
  QUESTION1,
};
