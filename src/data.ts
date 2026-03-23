// ── TEAM ──────────────────────────────────────────────
import {Member} from "@/model/member.ts";

export const TEAM: Member[] = [
    {
        initials: 'C',
        color: '#4ab8b8',
        name: 'Teamlid 1',
        role: 'Product & Visie',
        bio: 'Drijft de productstrategie en zorgt dat Quest100 gefocust blijft op echte studentenbehoeften.',
        kudos: 47,
        quests: 12,
        level: 8,
        linkedin: 'https://linkedin.com/in/JOUWHANDLE',
    },
    {
        initials: 'A',
        color: '#7c6cb8',
        name: 'Teamlid 2',
        role: 'UX & Onderzoek',
        bio: 'Leidt gebruikersonderzoek, wireframing en de gamificationlaag. Frictie omzetten naar plezier.',
        kudos: 63,
        quests: 18,
        level: 9,
        linkedin: 'https://linkedin.com/in/JOUWHANDLE',
    },
    {
        initials: 'B',
        color: '#4a9e7c',
        name: 'Teamlid 3',
        role: 'Tech & Integratie',
        bio: 'Eigenaar van de technische architectuur, KdG SSO en dataflows voor 15.000+ gebruikers.',
        kudos: 55,
        quests: 15,
        level: 8,
        linkedin: 'https://linkedin.com/in/JOUWHANDLE',
    },
]

// ── FEATURES ──────────────────────────────────────────
export const FEATURES = [
    {icon: '⚡', type: "eco"},
    {icon: '🎯', type: "gotcha"},
    {icon: '🦫', type: "avatar"},
    {icon: '📅', type: "event"},
    {icon: '🔐', type: "sso"},
]

// ── KUDOS TABLE ────────────────────────────────────────
export const KUDOS_ROWS = [
    {
        type: "scan"
    },
    {type: "kudos"},
    {type: "doc-stud"},
    {
        type: "stud-doc"
    },
    {type: "quest"},
    {type: "event"},
]

// ── ARCHETYPES ────────────────────────────────────────
export const ARCHETYPES = [
    {icon: '🧙', type: "wizard"},
    {icon: '🤝', type: "catalyst"},
    {icon: '🎉', type: "maker"},
    {icon: '🧭', type: "explorer"},
    {icon: '🛡️', type: "guardian"},
]

// ── SLIDES ────────────────────────────────────────────
export const SLIDES = [
    {emoji: '📊', num: 'Deck 01', title: 'Initiële Pitch — Probleem & Oplossing', color: 'st1', url: '#'},
    {emoji: '🎮', num: 'Deck 02', title: 'Gamification Deep Dive', color: 'st2', url: '#'},
    {emoji: '🏛️', num: 'Deck 03', title: 'Tech Architectuur & KdG', color: 'st3', url: '#'},
    {emoji: '📈', num: 'Deck 04', title: "Metrics & KPI's", color: 'st4', url: '#'},
]

// ── TECH STACK ────────────────────────────────────────
export const TECH = [
    {icon: '💪', name: 'Angular', role: 'Frontend', bg: 'rgba(221,0,49,.15)'},
    {icon: '🦫', name: 'Go (Golang)', role: 'Backend API', bg: 'rgba(0,173,216,.15)'},
    {icon: '🐘', name: 'PostgreSQL', role: 'Database', bg: 'rgba(51,103,145,.2)'},
    {icon: '🏫', name: 'KdG SSO + AD', role: 'Integratie', bg: 'rgba(74,184,184,.15)'},
]

// ── PLATFORMS ─────────────────────────────────────────
export const PLATFORMS = ['Intranet', 'Canvas', 'TimeEdit', 'eStudentService', 'ECTS Fiches']

// ── NAV SECTIONS ──────────────────────────────────────
export const NAV_SECTIONS = [
    {id: 's1', type: 'home'},
    {id: 's2', type: 'feature'},
    {id: 's3', type: 'pitch'},
    {id: 's4', type: 'article'},
    {id: 's5', type: 'kudos'},
    {id: 's6', type: 'slides'},
    {id: 's7', type: 'team'},
]
