// @flow

export type ClassType = {|
    name: string,
    url: string,
    zoomurl?: string,
    discussionurl?: string,
    collaburl?: string,
    specialurl?: string,
|};

export type ClassCommands = "f1" | "pl" | "cv" | "ece" | "sts" | "apma";

export type JoinOrDiscussType = "j" | "d" | "c" | "s"; // j = join; d = discussion; c = UVA Collab; default to url; s = special

export const CLASSES: {[ClassCommands]: ClassType } = {
    f1: {
        name: "CS 4501: F1/10 Autonomous Racing: Perception, Planning, and Control for Autonomous Driving",
        url: "https://linklab-uva.github.io/autonomousracing/"
    },
    pl: {
        name: "CS 4640: Programming Languages for Web Applications",
        url: "http://www.cs.virginia.edu/~up3f/cs4640/syllabus.html"
    },
    cv: {
        name: "CS 4501: Introduction to Computer Vision",
        collaburl: "https://collab.its.virginia.edu/portal/site/a348b7f2-473b-46d4-b348-f189fc4889e3", 
        url: "https://www.vicenteordonez.com/vision/",
    },
    ece: {
        name: "CS 3501: Embedded Computing & Robotics I",
        url: "https://collab.its.virginia.edu/portal/site/cdd921f5-3ec5-4de7-9bdc-da5f5a1e92c8"
    },
    sts: {
        name: "STS 4600: The Engineer, Ethics, and Professional Responsibility", 
        url: "https://collab.its.virginia.edu/portal/"
    },
    apma: {
        name: "APMA 2501: Mathematics of Information",
        url: "http://ips.lab.virginia.edu/mathematics-of-information"
    }
};
