var dictionary_noun = [];
dictionary_noun["House"] = "A building in which people live; residence for human beings";
dictionary_noun["City"] = "A large or important town";
dictionary_noun["Forest"] = "A large tract of land covered with trees and underbrush; woodland";
dictionary_noun["School"] = "An institution where instruction is given, especially to persons under college age";
dictionary_noun["Living room"] = "A room in a home used, especially by a family, for leisure activities, entertaining guests, etc.; parlor.";
dictionary_noun["Computer"] = "A programmable electronic device designed to accept data, perform prescribed mathematical and logical operations at high speed, and display the results of these operations";
dictionary_noun["Tower"] = "A building or structure high in proportion to its lateral dimensions, either isolated or forming part of a building";
dictionary_noun["Crime"] = "An action or an instance of negligence that is deemed injurious to the public welfare or morals or to the interests of the state and that is legally prohibited";
dictionary_noun["Bubble"] = "A nearly spherical body of gas contained in a liquid";
dictionary_noun["Company"] = "A number of individuals assembled or associated together; group of people";
dictionary_noun["Volcano"] = "a vent in the earth's crust through which lava, steam, ashes, etc., are expelled, either continuously or at irregular intervals";
dictionary_noun["Branch"] = "A division or subdivision of the stem or axis of a tree, shrub, or other plant";
dictionary_noun["Mouth"] = "The opening through which an animal or human takes in food";
dictionary_noun["Wing"] = "Either of the two forelimbs of most birds and of bats, corresponding to the human arms, that are specialized for flight";
dictionary_noun["Pet"] = "Domesticated or tamed animal that is kept as a companion and cared for affectionately";
dictionary_noun["Jewel"] = "A cut and polished precious stone; gem";
dictionary_noun["Sun"] = "The star that is the central body of the solar system, around which the planets revolve and from which they receive light and heat";
dictionary_noun["Airplane"] = "A heavier-than-air aircraft kept aloft by the upward thrust exerted by the passing air on its fixed wings and driven by propellers, jet propulsion";
dictionary_noun["Face"] = "The front part of the head, from the forehead to the chin";
dictionary_noun["Word"] = "A unit of language, consisting of one or more spoken sounds or their written representation, that functions as a principal carrier of meaning";
dictionary_noun["Rock"] = "A large mass of stone forming a hill, cliff, promontory, or the like";
function getWord() {
    key = document.getElementById("your_word").value;
    if(key in dictionary_noun) {
        document.write(dictionary_noun[key]);
    }
    else {
        alert("shit");
    }
}
   