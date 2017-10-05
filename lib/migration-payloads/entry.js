/* eslint max-nested-callbacks: "off" */

module.exports = function payloadBuilder (plan, contentTypes = [], entries = {}) {
  const newPlan = plan.map((chunk) => {
    if (chunk.type === 'CONTENT_MODEL_CHANGE') {
      return chunk;
    }
    //
    //  **********   *******   *******     *******  
    // ////[>*///   **/////** /**////**   *<]////** 
    //     [>*     **     //*<]**    /** **     //**
    //     [>*    /**      /**/**    /*<]**      /**
    //     [>*    /**      /**/**    /*<]**      /**
    //     [>*    //**     ** /**    ** //**     ** 
    //     [>*     //*******  /*******   //*******  
    //     //       ///////   ///////     ///////   
    //
    //
    //     Remember to do the following:
    //
    //     - keep track of the each change to the entries so we can update
    //      their version numbers (required when sendin the data to the API)
    //     - clone each entry (so each entry has its own version number)
    //

    chunk.steps.forEach((step) => {
      const { contentTypeId, transformation: { from, to, transform } } = step.payload;
      const entriesForCT = entries[contentTypeId];
      console.log(from, to);

      const transformedEntries = entriesForCT.map((entry) => {
        const values = from.map((fromKey) => entry.fields[fromKey]['en-US']);
        const newValues = transform(values);
        newValues.forEach((newValue, index) => {
          const key = to[index];

          if (entry.fields[key]) {
            entry.fields[key]['en-US'] = newValue;
          } else {
            entry.fields[key] = { 'en-US': newValue };
          }
        });

        return entry;
      });

      step.payload = transformedEntries;
    });

    return chunk;
  });

  return newPlan;
};
