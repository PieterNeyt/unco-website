// ── TEAM ──────────────────────────────────────────────
import {Member} from "@/model/member.ts";

export const TEAM: Member[] = [
    {
        photo: '/src/assets/hugo.jpg',
        name: 'Hugo Dor',
        major: 'dev',
        linkedin: 'https://www.linkedin.com/in/hugo-dor/',
    },
    {
        photo: '/src/assets/pieter.png',
        name: 'Pieter Neyt',
        major: 'dev',
        linkedin: 'https://www.linkedin.com/in/pieter-neyt/',
    },
    {
        photo: '/src/assets/cian.png',
        name: 'Cian Van Acker',
        major: 'dev',
        linkedin: 'https://www.linkedin.com/in/cian-van-acker-878233332/',
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

// ── TECH STACK ────────────────────────────────────────
export const TECH = [
    {icon: '💪', name: 'Angular', role: 'Frontend', bg: 'rgba(221,0,49,.15)'},
    {icon: '🦫', name: 'Go (Golang)', role: 'Backend API', bg: 'rgba(0,173,216,.15)'},
    {icon: '🐘', name: 'PostgreSQL', role: 'Database', bg: 'rgba(51,103,145,.2)'},
    {icon: '🏫', name: 'KdG SSO + AD', role: 'Integratie', bg: 'rgba(74,184,184,.15)'},
]

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
