const getPeopleListCustom = (list) => {
    const peopleList = [];
    for(const person of list) {
        peopleList.push({
            fullName: person.display_name,
            email: person.email_address,
            jobTitle: person.title
        })
    }
    return peopleList;
}

const isValidCharacter = (charCode) => {
    return charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123;
}

const getEmailUniqueCharactersFrequency = (email, uniqueCharactersCount) =>{
    let ch;
    for(let i = 0; i < email.length; i+=1) {
        ch = email.charAt(i);
        if(!isValidCharacter(email.charCodeAt(i)))
            continue;
        
        if(uniqueCharactersCount[ch]) {
            uniqueCharactersCount[ch] = uniqueCharactersCount[ch] + 1;
        } else {
            uniqueCharactersCount[ch] = 1;
        }
    }
}

const getEmailsUniqueCharactersFrequency = (peopleList) => {
    const uniqueCharactersCount = {};
    for(const person of peopleList) {
        const email = person.email_address;
        getEmailUniqueCharactersFrequency(email, uniqueCharactersCount);
    }

    return Object.entries(uniqueCharactersCount).sort(([,a],[,b]) => b-a);
}

module.exports = {
    getPeopleListCustom,
    getEmailsUniqueCharactersFrequency
}