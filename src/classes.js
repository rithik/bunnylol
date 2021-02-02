// @flow strict

export type ClassType = {|
    name: string,
    url: string,
    zoomurl?: string,
    discussionurl?: string,
    collaburl?: string,
    specialurl?: string,
|};

export type ClassCommands = "f1" | "pl" | "cv" | "ear" | "sts" | "apma";

export type JoinOrDiscussType = "j" | "d" | "c" | "s"; // j = join; d = discussion; c = UVA Collab; default to url; s = special

export const CLASSES: {[ClassCommands]: ClassType } = {
    f1: {
        name: "CS 4501: F1/10 Autonomous Racing: Perception, Planning, and Control for Autonomous Driving",
        url: "https://linklab-uva.github.io/autonomousracing/", 
        collaburl: "https://collab.its.virginia.edu/portal/site/90579f89-3cbf-4f83-a4d7-902848f7703d",
        discussionurl: "https://piazza.com/class/kko5x3rocvl3ky"
    },
    pl: {
        name: "CS 4640: Programming Languages for Web Applications",
        url: "https://www.cs.virginia.edu/~up3f/cs4640/schedule.html",
        collaburl: "https://collab.its.virginia.edu/portal/site/8fff0a03-d2d8-45c8-bda6-760bf8d7e2e4/",
        discussionurl: "https://piazza.com/class/kkestnq1z5u3kl",
        zoomurl: "https://virginia.zoom.us/j/95783077722?pwd=U2lLTkN3Y05WWGhJQ051Z3BUWmxvUT09"
    },
    cv: {
        name: "CS 4501: Introduction to Computer Vision",
        url: "https://www.vicenteordonez.com/vision/",
        collaburl: "https://collab.its.virginia.edu/portal/site/a348b7f2-473b-46d4-b348-f189fc4889e3", 
        zoomurl: "https://virginia.zoom.us/j/99413743466?pwd=VHpmQW9SR1A5bmpseVZMN2tPZVZOdz09"
    },
    ear: {
        name: "CS 3501: Embedded Computing & Robotics I",
        url: "https://collab.its.virginia.edu/portal/site/cdd921f5-3ec5-4de7-9bdc-da5f5a1e92c8",
        discussionurl: "discord://",
        specialurl: "https://learn.zybooks.com/zybook/VIRGINIACSECE3501Spring2021?selectedPanel=assignments-panel"
    },
    sts: {
        name: "STS 4600: The Engineer, Ethics, and Professional Responsibility", 
        url: "https://collab.its.virginia.edu/portal/site/d360b679-581f-496d-8782-7053d86aefca",
        zoomurl: "https://virginia.zoom.us/j/93721024007?pwd=T1NJKzdrZG03L2pJN0dEQkcwUC91QT09"
    },
    apma: {
        name: "APMA 2501: Mathematics of Information",
        url: "http://www.ece.virginia.edu/~ffh8x/moi/",
        collaburl: "https://collab.its.virginia.edu/portal/site/0778b7b4-8cd8-440c-9fcb-bd8e74d5b9f3",
        discussionurl: "https://piazza.com/class/kknbo8nztqo6vg"
    }
};
