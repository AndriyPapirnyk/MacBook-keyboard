let caps_dot = false;
document.body.onkeydown = function(e) {
console.log(e);
if(e.keyCode === 27) {
    esc.style.boxShadow ='0 0 2px #333';
} else if(e.keyCode === 192) {
    btn1_row2.style.boxShadow = '0 0 2px #333';
    input.value = input.value + '`';
}  else if(e.keyCode === 49) {
    b1.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '!';
    } else if(e.shiftKey === false) {
        input.value = input.value + '1';
    };
} else if(e.keyCode === 50) {
    b2.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '@';
    } else if(e.shiftKey === false) {
        input.value = input.value + '2';
    };
} else if(e.keyCode === 51) {
    b3.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '#';
    } else if(e.shiftKey === false) {
        input.value = input.value + '3';
    };
} else if(e.keyCode === 52) {
    b4.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '$';
    } else if(e.shiftKey === false) {
        input.value = input.value + '4';
    };
} else if(e.keyCode === 53) {
    b5.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '%';
    } else if(e.shiftKey === false) {
        input.value = input.value + '5';
    };
} else if(e.keyCode === 54) {
    b6.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '^';
    } else if(e.shiftKey === false) {
        input.value = input.value + '6';
    };
} else if(e.keyCode === 55) {
    b7.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '&';
    } else if(e.shiftKey === false) {
        input.value = input.value + '7';
    };
} else if(e.keyCode === 56) {
    b8.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '*';
    } else if(e.shiftKey === false) {
        input.value = input.value + '8';
    };
} else if(e.keyCode === 57) {
    b9.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '(';
    } else if(e.shiftKey === false) {
        input.value = input.value + '9';
    };
} else if(e.keyCode === 48) {
    b0.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + ')';
    } else if(e.shiftKey === false) {
        input.value = input.value + '0';
    };
} else if(e.keyCode === 189) {
    btn2_row2.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '_';
    } else if(e.shiftKey === false) {
        input.value = input.value + '-';
    };
} else if(e.keyCode === 187) {
    btn3_row2.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '+';
    } else if(e.shiftKey === false) {
        input.value = input.value + '=';
    };
} else if(e.keyCode === 8) {
    del.style.boxShadow = '0 0 2px #333';
} else if(e.keyCode === 9) {
    tab.style.boxShadow = '0 0 2px #333';
} else if(e.keyCode === 81) {
    q.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'Q';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'q';
    };
} else if(e.keyCode === 87) {
    w.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'W';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'w';
    };
} else if(e.keyCode === 69) {
    be.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'E';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'e';
    };
} else if(e.keyCode === 82) {
    r.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'R';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'r';
    };
} else if(e.keyCode === 84) {
    t.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'T';
    } else if(e.shiftKey === false) {
        input.value = input.value + 't';
    };
} else if(e.keyCode === 89) {
    y.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'Y';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'y';
    };
} else if(e.keyCode === 85) {
    u.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'U';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'u';
    };
} else if(e.keyCode === 73) {
    i.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'I';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'i';
    };
} else if(e.keyCode === 79) {
    o.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'O';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'o';
    };
} else if(e.keyCode === 80) {
    p.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'P';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'p';
    };
} else if(e.keyCode === 219) {
    btn1_row3.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '{';
    } else if(e.shiftKey === false) {
        input.value = input.value + '[';
    };
} else if(e.keyCode === 221) {
    btn2_row3.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '}';
    } else if(e.shiftKey === false) {
        input.value = input.value + ']';
    };
} else if(e.keyCode === 220) {
    btn3_row3.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '|';
    } else if(e.shiftKey === false) {
        input.value = input.value + '/';
    };
} else if(e.keyCode === 20) {
    caps.style.boxShadow = '0 0 2px #333';
    if(caps_dot === false) {
        dot_caps.style.backgroundColor = 'lightgreen';
        caps_dot = true;
    } else {
        dot_caps.style.backgroundColor = 'white';
        caps_dot = false;
    }
} else if(e.keyCode === 65) {
    a.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'A';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'a';
    };
} else if(e.keyCode === 83) {
    s.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'S';
    } else if(e.shiftKey === false) {
        input.value = input.value + 's';
    };
} else if(e.keyCode === 68) {
    d.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'D';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'd';
    };
} else if(e.keyCode === 70) {
    f.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'F';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'f';
    };
} else if(e.keyCode === 71) {
    g.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'G';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'g';
    };
} else if(e.keyCode === 72) {
    h.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'H';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'h';
    };
} else if(e.keyCode === 74) {
    j.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'J';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'j';
    };
} else if(e.keyCode === 75) {
    k.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'K';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'k';
    };
} else if(e.keyCode === 76) {
    l.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'L';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'l';
    };
} else if(e.keyCode === 186) {
    btn1_row4.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + ':';
    } else if(e.shiftKey === false) {
        input.value = input.value + ';';
    };
}  else if(e.keyCode === 222) {
    btn2_row4.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '"';
    } else if(e.shiftKey === false) {
        input.value = input.value + `'`;
    };
} else if(e.keyCode === 13) {
    breturn.style.boxShadow = '0 0 2px #333';
}  else if(e.keyCode === 16) {
    shift.style.boxShadow = '0 0 2px #333';
    shift2.style.boxShadow = '0 0 2px #333';
}  else if(e.keyCode === 90) {
    z.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'Z';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'z';
    };
}  else if(e.keyCode === 88) {
    x.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'X';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'x';
    };
} else if(e.keyCode === 67) {
    c.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'C';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'c';
    };
} else if(e.keyCode === 86) {
    v.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'V';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'v';
    };
} else if(e.keyCode === 66) {
    b.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'B';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'b';
    };
} else if(e.keyCode === 78) {
    n.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'N';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'n';
    };
} else if(e.keyCode === 77) {
    m.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + 'M';
    } else if(e.shiftKey === false) {
        input.value = input.value + 'm';
    };
}  else if(e.keyCode === 188) {
    btn1_row5.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '<';
    } else if(e.shiftKey === false) {
        input.value = input.value + ',';
    };
}  else if(e.keyCode === 190) {
    btn2_row5.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '>';
    } else if(e.shiftKey === false) {
        input.value = input.value + '.';
    };
}  else if(e.keyCode === 191) {
    btn3_row5.style.boxShadow = '0 0 2px #333';
    if(e.shiftKey === true) {
        input.value = input.value + '?';
    } else if(e.shiftKey === false) {
        input.value = input.value + '/';
    };
}  else if(e.keyCode === 17) {
    contr.style.boxShadow = '0 0 2px #333';
}  else if(e.keyCode === 18) {
    opt1.style.boxShadow = '0 0 2px #333';
    opt2.style.boxShadow = '0 0 2px #333';
}  else if(e.keyCode === 91) {
    com1.style.boxShadow = '0 0 2px #333';
}  else if(e.keyCode === 93) {
    com2.style.boxShadow = '0 0 2px #333';
}  else if(e.keyCode === 32) {
    space.style.boxShadow = '0 0 2px #333';
    input.value = input.value + ' ';
}  else if(e.keyCode === 37) {
    s_l.style.boxShadow = '0 0 2px #333';
}  else if(e.keyCode === 38) {
    s_t.style.boxShadow = '0 0 2px #333';
}  else if(e.keyCode === 40) {
    s_b.style.boxShadow = '0 0 2px #333';
}  else if(e.keyCode === 39) {
    s_r.style.boxShadow = '0 0 2px #333';
} else if(e.keyCode === 112) {
    f1.style.boxShadow = '0 0 2px #333';
} else if(e.keyCode === 113) {
    f2.style.boxShadow = '0 0 2px #333';
}else if(e.keyCode === 114) {
    f3.style.boxShadow = '0 0 2px #333';
}else if(e.keyCode === 115) {
    f4.style.boxShadow = '0 0 2px #333';
}else if(e.keyCode === 116) {
    f5.style.boxShadow = '0 0 2px #333';
}else if(e.keyCode === 117) {
    f6.style.boxShadow = '0 0 2px #333';
}else if(e.keyCode === 118) {
    f7.style.boxShadow = '0 0 2px #333';
}else if(e.keyCode === 119) {
    f8.style.boxShadow = '0 0 2px #333';
}else if(e.keyCode === 120) {
    f9.style.boxShadow = '0 0 2px #333';
}else if(e.keyCode === 121) {
    f10.style.boxShadow = '0 0 2px #333';
}else if(e.keyCode === 122) {
    f11.style.boxShadow = '0 0 2px #333';
}else if(e.keyCode === 123) {
    f12.style.boxShadow = '0 0 2px #333';
}
};





document.body.onkeyup = function(e) {
    console.log(e.keyCode);
    if(e.keyCode === 27) {
        esc.style.boxShadow ='0 5px 2px #333';
    } else if(e.keyCode === 192) {
        btn1_row2.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 49) {
        b1.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 50) {
        b2.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 51) {
        b3.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 52) {
        b4.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 53) {
        b5.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 54) {
        b6.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 55) {
        b7.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 56) {
        b8.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 57) {
        b9.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 48) {
        b0.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 189) {
        btn2_row2.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 187) {
        btn3_row2.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 8) {
        del.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 9) {
        tab.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 81) {
        q.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 87) {
        w.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 69) {
        be.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 82) {
        r.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 84) {
        t.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 89) {
        y.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 85) {
        u.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 73) {
        i.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 79) {
        o.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 80) {
        p.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 219) {
        btn1_row3.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 221) {
        btn2_row3.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 220) {
        btn3_row3.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 20) {
        caps.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 65) {
        a.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 83) {
        s.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 68) {
        d.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 70) {
        f.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 71) {
        g.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 72) {
        h.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 74) {
        j.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 75) {
        k.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 76) {
        l.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 186) {
        btn1_row4.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 222) {
        btn2_row4.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 13) {
        breturn.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 16) {
        shift.style.boxShadow = '0 5px 2px #333';
        shift2.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 90) {
        z.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 88) {
        x.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 67) {
        c.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 86) {
        v.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 66) {
        b.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 78) {
        n.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 77) {
        m.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 188) {
        btn1_row5.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 190) {
        btn2_row5.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 191) {
        btn3_row5.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 17) {
        contr.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 18) {
        opt1.style.boxShadow = '0 5px 2px #333';
        opt2.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 91) {
        com1.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 93) {
        com2.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 32) {
        space.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 37) {
        s_l.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 38) {
        s_t.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 40) {
        s_b.style.boxShadow = '0 5px 2px #333';
    }  else if(e.keyCode === 39) {
        s_r.style.boxShadow = '0 5px 2px #333';
    }else if(e.keyCode === 112) {
        f1.style.boxShadow = '0 5px 2px #333';
    } else if(e.keyCode === 113) {
        f2.style.boxShadow = '0 5px 2px #333';
    }else if(e.keyCode === 114) {
        f3.style.boxShadow = '0 5px 2px #333';
    }else if(e.keyCode === 115) {
        f4.style.boxShadow = '0 5px 2px #333';
    }else if(e.keyCode === 116) {
        f5.style.boxShadow ='0 5px 2px #333';
    }else if(e.keyCode === 117) {
        f6.style.boxShadow = '0 5px 2px #333';
    }else if(e.keyCode === 118) {
        f7.style.boxShadow = '0 5px 2px #333';
    }else if(e.keyCode === 119) {
        f8.style.boxShadow = '0 5px 2px #333';
    }else if(e.keyCode === 120) {
        f9.style.boxShadow = '0 5px 2px #333';
    }else if(e.keyCode === 121) {
        f10.style.boxShadow = '0 5px 2px #333';
    }else if(e.keyCode === 122) {
        f11.style.boxShadow = '0 5px 2px #333';
    }else if(e.keyCode === 123) {
        f12.style.boxShadow = '0 5px 2px #333';
    }
    };

let dn_value = true;
dn.onclick = function() {
    if(dn_value === true) {
wrap.style.color = 'black';
wrap.style.backgroundColor = 'white';
keyboard.style.backgroundColor = 'white';
keyboard.style.border = '3px solid #333';
esc.style.backgroundColor = 'white';
f1.style.backgroundColor = 'white';
f2.style.backgroundColor = 'white';
f3.style.backgroundColor = 'white';
f4.style.backgroundColor = 'white';
f5.style.backgroundColor = 'white';
f6.style.backgroundColor = 'white';
f7.style.backgroundColor = 'white';
f8.style.backgroundColor = 'white';
f9.style.backgroundColor = 'white';
f10.style.backgroundColor = 'white';
f11.style.backgroundColor = 'white';
f12.style.backgroundColor = 'white';
lock.style.backgroundColor = 'white';
btn1_row2.style.backgroundColor = 'white';
b1.style.backgroundColor = 'white';
b2.style.backgroundColor = 'white';
b3.style.backgroundColor = 'white';
b4.style.backgroundColor = 'white';
b5.style.backgroundColor = 'white';
b6.style.backgroundColor = 'white';
b7.style.backgroundColor = 'white';
b8.style.backgroundColor = 'white';
b9.style.backgroundColor = 'white';
b0.style.backgroundColor = 'white';
btn2_row2.style.backgroundColor = 'white';
btn3_row2.style.backgroundColor = 'white';
del.style.backgroundColor = 'white';
tab.style.backgroundColor = 'white';
q.style.backgroundColor = 'white';
w.style.backgroundColor = 'white';
be.style.backgroundColor = 'white';
r.style.backgroundColor = 'white';
t.style.backgroundColor = 'white';
y.style.backgroundColor = 'white';
u.style.backgroundColor = 'white';
i.style.backgroundColor = 'white';
o.style.backgroundColor = 'white';
p.style.backgroundColor = 'white';
btn1_row3.style.backgroundColor = 'white';
btn2_row3.style.backgroundColor = 'white';
btn3_row3.style.backgroundColor = 'white';
caps.style.backgroundColor = 'white';
dot_caps.style.border = '1px solid black';
a.style.backgroundColor = 'white';
s.style.backgroundColor = 'white';
d.style.backgroundColor = 'white';
f.style.backgroundColor = 'white';
g.style.backgroundColor = 'white';
h.style.backgroundColor = 'white';
j.style.backgroundColor = 'white';
k.style.backgroundColor = 'white';
l.style.backgroundColor = 'white';
btn1_row4.style.backgroundColor = 'white';
btn2_row4.style.backgroundColor = 'white';
breturn.style.backgroundColor = 'white';
shift.style.backgroundColor = 'white';
z.style.backgroundColor = 'white';
x.style.backgroundColor = 'white';
c.style.backgroundColor = 'white';
v.style.backgroundColor = 'white';
b.style.backgroundColor = 'white';
n.style.backgroundColor = 'white';
m.style.backgroundColor = 'white';
btn1_row5.style.backgroundColor = 'white';
btn2_row5.style.backgroundColor = 'white';
btn3_row5.style.backgroundColor = 'white';
shift2.style.backgroundColor = 'white';
fn.style.backgroundColor = 'white';
contr.style.backgroundColor = 'white';
contr_img.src = 'contr_bl.png';
opt1.style.backgroundColor = 'white';
opt1_img.src = 'opt_bl.png';
opt2.style.backgroundColor = 'white';
opt2_img.src = 'opt_bl.png';
com1.style.backgroundColor = 'white';
command1_img.src = 'command_bl.png';
com2.style.backgroundColor = 'white';
command2_img.src = 'command_bl.png';
space.style.backgroundColor = 'white';
s_l.style.backgroundColor = 'white';
s_t.style.backgroundColor = 'white';
s_b.style.backgroundColor = 'white';
s_r.style.backgroundColor = 'white';
pol1_img.src = 'pol_bl.png';
pol2_img.src = 'pol_bl.png';
pol3_img.src = 'pol_bl.png';
pol4_img.src = 'pol_bl.png';

esc.style.border = '1px solid #555';
f1.style.border = '1px solid #555';
f2.style.border = '1px solid #555';
f3.style.border = '1px solid #555';
f4.style.border = '1px solid #555';
f5.style.border = '1px solid #555';
f6.style.border = '1px solid #555';
f7.style.border = '1px solid #555';
f8.style.border = '1px solid #555';
f9.style.border = '1px solid #555';
f10.style.border = '1px solid #555';
f11.style.border = '1px solid #555';
f12.style.border = '1px solid #555';
lock.style.border = '1px solid #555';
btn1_row2.style.border = '1px solid #555';
b1.style.border = '1px solid #555';
b2.style.border = '1px solid #555';
b3.style.border = '1px solid #555';
b4.style.border = '1px solid #555';
b5.style.border = '1px solid #555';
b6.style.border = '1px solid #555';
b7.style.border = '1px solid #555';
b8.style.border = '1px solid #555';
b9.style.border = '1px solid #555';
b0.style.border = '1px solid #555';
btn2_row2.style.border = '1px solid #555';
btn3_row2.style.border = '1px solid #555';
del.style.border = '1px solid #555';
tab.style.border = '1px solid #555';
q.style.border = '1px solid #555';
w.style.border = '1px solid #555';
be.style.border = '1px solid #555';
r.style.border = '1px solid #555';
t.style.border = '1px solid #555';
y.style.border = '1px solid #555';
u.style.border = '1px solid #555';
i.style.border = '1px solid #555';
o.style.border = '1px solid #555';
p.style.border = '1px solid #555';
btn1_row3.style.border = '1px solid #555';
btn2_row3.style.border = '1px solid #555';
btn3_row3.style.border = '1px solid #555';
caps.style.border = '1px solid #555';
a.style.border = '1px solid #555';
s.style.border = '1px solid #555';
d.style.border = '1px solid #555';
f.style.border = '1px solid #555';
g.style.border = '1px solid #555';
h.style.border = '1px solid #555';
j.style.border = '1px solid #555';
k.style.border = '1px solid #555';
l.style.border = '1px solid #555';
btn1_row4.style.border = '1px solid #555';
btn2_row4.style.border = '1px solid #555';
breturn.style.border = '1px solid #555';
shift.style.border = '1px solid #555';
z.style.border = '1px solid #555';
x.style.border = '1px solid #555';
c.style.border = '1px solid #555';
v.style.border = '1px solid #555';
b.style.border = '1px solid #555';
n.style.border = '1px solid #555';
m.style.border = '1px solid #555';
btn1_row5.style.border = '1px solid #555';
btn2_row5.style.border = '1px solid #555';
btn3_row5.style.border = '1px solid #555';
shift2.style.border = '1px solid #555';
fn.style.border = '1px solid #555';
contr.style.border = '1px solid #555';
opt1.style.border = '1px solid #555';
opt2.style.border = '1px solid #555';
space.style.border = '1px solid #555';
com1.style.border = '1px solid #555';
com2.style.border = '1px solid #555';
s_l.style.border = '1px solid #555';
s_t.style.border = '1px solid #555';
s_b.style.border = '1px solid #555';
s_r.style.border = '1px solid #555';

dn_value = false;
    } else if(dn_value === false) {
        wrap.style.color = 'white';
        wrap.style.backgroundColor = 'black';
        keyboard.style.backgroundColor = 'gray';
        keyboard.style.border = 'none';
        esc.style.backgroundColor = 'black';
        f1.style.backgroundColor = 'black';
        f2.style.backgroundColor = 'black';
        f3.style.backgroundColor = 'black';
        f4.style.backgroundColor = 'black';
        f5.style.backgroundColor = 'black';
        f6.style.backgroundColor = 'black';
        f7.style.backgroundColor = 'black';
        f8.style.backgroundColor = 'black';
        f9.style.backgroundColor = 'black';
        f10.style.backgroundColor = 'black';
        f11.style.backgroundColor = 'black';
        f12.style.backgroundColor = 'black';
        lock.style.backgroundColor = 'black';
        btn1_row2.style.backgroundColor = 'black';
        b1.style.backgroundColor = 'black';
        b2.style.backgroundColor = 'black';
        b3.style.backgroundColor = 'black';
        b4.style.backgroundColor = 'black';
        b5.style.backgroundColor = 'black';
        b6.style.backgroundColor = 'black';
        b7.style.backgroundColor = 'black';
        b8.style.backgroundColor = 'black';
        b9.style.backgroundColor = 'black';
        b0.style.backgroundColor = 'black';
        btn2_row2.style.backgroundColor = 'black';
        btn3_row2.style.backgroundColor = 'black';
        del.style.backgroundColor = 'black';
        tab.style.backgroundColor = 'black';
        q.style.backgroundColor = 'black';
        w.style.backgroundColor = 'black';
        be.style.backgroundColor = 'black';
        r.style.backgroundColor = 'black';
        t.style.backgroundColor = 'black';
        y.style.backgroundColor = 'black';
        u.style.backgroundColor = 'black';
        i.style.backgroundColor = 'black';
        o.style.backgroundColor = 'black';
        p.style.backgroundColor = 'black';
        btn1_row3.style.backgroundColor = 'black';
        btn2_row3.style.backgroundColor = 'black';
        btn3_row3.style.backgroundColor = 'black';
        caps.style.backgroundColor = 'black';
        dot_caps.style.border = 'none';
        a.style.backgroundColor = 'black';
        s.style.backgroundColor = 'black';
        d.style.backgroundColor = 'black';
        f.style.backgroundColor = 'black';
        g.style.backgroundColor = 'black';
        h.style.backgroundColor = 'black';
        j.style.backgroundColor = 'black';
        k.style.backgroundColor = 'black';
        l.style.backgroundColor = 'black';
        btn1_row4.style.backgroundColor = 'black';
        btn2_row4.style.backgroundColor = 'black';
        breturn.style.backgroundColor = 'black';
        shift.style.backgroundColor = 'black';
        z.style.backgroundColor = 'black';
        x.style.backgroundColor = 'black';
        c.style.backgroundColor = 'black';
        v.style.backgroundColor = 'black';
        b.style.backgroundColor = 'black';
        n.style.backgroundColor = 'black';
        m.style.backgroundColor = 'black';
        btn1_row5.style.backgroundColor = 'black';
        btn2_row5.style.backgroundColor = 'black';
        btn3_row5.style.backgroundColor = 'black';
        shift2.style.backgroundColor = 'black';
        fn.style.backgroundColor = 'black';
        contr.style.backgroundColor = 'black';
        contr_img.src = 'contr.png';
        opt1.style.backgroundColor = 'black';
        opt1_img.src = 'opt.png';
        opt2.style.backgroundColor = 'black';
        opt2_img.src = 'opt.png';
        com1.style.backgroundColor = 'black';
        command1_img.src = 'command.png';
        com2.style.backgroundColor = 'black';
        command2_img.src = 'command.png';
        space.style.backgroundColor = 'black';
        s_l.style.backgroundColor = 'black';
        s_t.style.backgroundColor = 'black';
        s_b.style.backgroundColor = 'black';
        s_r.style.backgroundColor = 'black';
        pol1_img.src = 'pol.png';
        pol2_img.src = 'pol.png';
        pol3_img.src = 'pol.png';
        pol4_img.src = 'pol.png';
        





        esc.style.border = 'none';
f1.style.border = 'none';
f2.style.border = 'none';
f3.style.border = 'none';
f4.style.border = 'none';
f5.style.border = 'none';
f6.style.border = 'none';
f7.style.border = 'none';
f8.style.border = 'none';
f9.style.border = 'none';
f10.style.border = 'none';
f11.style.border = 'none';
f12.style.border = 'none';
lock.style.border = 'none';
btn1_row2.style.border = 'none';
b1.style.border = 'none';
b2.style.border = 'none';
b3.style.border = 'v';
b4.style.border = 'none';
b5.style.border = 'none';
b6.style.border = 'none';
b7.style.border = 'none';
b8.style.border = 'none';
b9.style.border = 'none';
b0.style.border = 'none';
btn2_row2.style.border = 'none';
btn3_row2.style.border = 'none';
del.style.border = 'none';
tab.style.border = 'none';
q.style.border = 'none';
w.style.border = 'none';
be.style.border = 'none';
r.style.border = 'none';
t.style.border = 'none';
y.style.border = 'none';
u.style.border = 'none';
i.style.border = 'none';
o.style.border = 'none';
p.style.border = 'none';
btn1_row3.style.border = 'none';
btn2_row3.style.border = 'none';
btn3_row3.style.border = 'none';
caps.style.border = 'none';
a.style.border = 'none';
s.style.border = 'none';
d.style.border = 'none';
f.style.border = 'none';
g.style.border = 'none';
h.style.border = 'none';
j.style.border = 'none';
k.style.border = 'none';
l.style.border = 'none';
btn1_row4.style.border = 'none';
btn2_row4.style.border = 'none';
breturn.style.border = 'none';
shift.style.border = 'none';
z.style.border = 'none';
x.style.border = 'none';
c.style.border = 'none';
v.style.border = 'none';
b.style.border = 'none';
n.style.border = 'none';
m.style.border = 'none';
btn1_row5.style.border = 'none';
btn2_row5.style.border = 'none';
btn3_row5.style.border = 'none';
shift2.style.border = 'none';
fn.style.border = 'none';
contr.style.border = 'none';
opt1.style.border = 'none';
opt2.style.border = 'none';
space.style.border = 'none';
com1.style.border = 'none';
com2.style.border = 'none';
s_l.style.border = 'none';
s_t.style.border = 'none';
s_b.style.border = 'none';
s_r.style.border = 'none';
dn_value = true;
    };




};


let lang_value = true;
lang.onclick = function() {
if(lang_value === true) {
    span1.innerText = 'Й';
    span2.innerText = 'Ц';
    span3.innerText = 'У';
    span4.innerText = 'К';
    span5.innerText = 'Е';
    span6.innerText = 'Н';
    span7.innerText = 'Г';
    span8.innerText = 'Ш';
    span9.innerText = 'Щ';
    span10.innerText = 'З';
    span11.innerText = 'Х';
    span12.innerText = '{[';
    span13.innerText = 'Ї';
    span14.innerText = '}]';
    span15.innerText = 'Ф';
    span16.innerText = 'І';
    span17.innerText = 'В';
    span18.innerText = 'А';
    span19.innerText = 'П';
    span20.innerText = 'Р';
    span21.innerText = 'О';
    span22.innerText = 'Л';
    span23.innerText = 'Д';
    span24.innerText = 'Ж';
    span25.innerText = ':;';
    span26.innerText = 'Є';
    span27.innerText = `"'`;
    span28.innerText = 'Я';
    span29.innerText = 'Ч';
    span30.innerText = 'С';
    span31.innerText = 'М';
    span32.innerText = 'И';
    span33.innerText = 'Т';
    span34.innerText = 'Ь';
    span35.innerText = 'Б';
    span36.innerText = '<,';
    span37.innerText = 'Ю';
    span38.innerText = '>.';






     if(e.keyCode === 81) {
        q.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Й';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'й';
        };
    } else if(e.keyCode === 87) {
        w.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Ц';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'ц';
        };
    } else if(e.keyCode === 69) {
        be.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'У';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'у';
        };
    } else if(e.keyCode === 82) {
        r.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'К';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'к';
        };
    } else if(e.keyCode === 84) {
        t.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Е';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'е';
        };
    } else if(e.keyCode === 89) {
        y.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Н';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'н';
        };
    } else if(e.keyCode === 85) {
        u.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Г';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'г';
        };
    } else if(e.keyCode === 73) {
        i.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Ш';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'ш';
        };
    } else if(e.keyCode === 79) {
        o.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Щ';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'щ';
        };
    } else if(e.keyCode === 80) {
        p.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'З';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'з';
        };
    } else if(e.keyCode === 219) {
        btn1_row3.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Х';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'х';
        };
    } else if(e.keyCode === 221) {
        btn2_row3.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Ї';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'ї';
        };
    } else if(e.keyCode === 220) {
        btn3_row3.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + '|';
        } else if(e.shiftKey === false) {
            input.value = input.value + '/';
        };
    } else if(e.keyCode === 20) {
        caps.style.boxShadow = '0 0 2px #333';
        if(caps_dot === false) {
            dot_caps.style.backgroundColor = 'lightgreen';
            caps_dot = true;
        } else {
            dot_caps.style.backgroundColor = 'white';
            caps_dot = false;
        }
    } else if(e.keyCode === 65) {
        a.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Ф';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'ф';
        };
    } else if(e.keyCode === 83) {
        s.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'І';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'і';
        };
    } else if(e.keyCode === 68) {
        d.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'В';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'в';
        };
    } else if(e.keyCode === 70) {
        f.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'А';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'а';
        };
    } else if(e.keyCode === 71) {
        g.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'П';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'п';
        };
    } else if(e.keyCode === 72) {
        h.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Р';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'р';
        };
    } else if(e.keyCode === 74) {
        j.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'О';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'о';
        };
    } else if(e.keyCode === 75) {
        k.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Л';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'л';
        };
    } else if(e.keyCode === 76) {
        l.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Д';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'д';
        };
    } else if(e.keyCode === 186) {
        btn1_row4.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Ж';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'ж';
        };
    }  else if(e.keyCode === 222) {
        btn2_row4.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Є';
        } else if(e.shiftKey === false) {
            input.value = input.value + `є`;
        };
    } else if(e.keyCode === 13) {
        breturn.style.boxShadow = '0 0 2px #333';
    }  else if(e.keyCode === 16) {
        shift.style.boxShadow = '0 0 2px #333';
        shift2.style.boxShadow = '0 0 2px #333';
    }  else if(e.keyCode === 90) {
        z.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Я';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'я';
        };
    }  else if(e.keyCode === 88) {
        x.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Ч';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'ч';
        };
    } else if(e.keyCode === 67) {
        c.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'С';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'с';
        };
    } else if(e.keyCode === 86) {
        v.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'М';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'м';
        };
    } else if(e.keyCode === 66) {
        b.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'И';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'и';
        };
    } else if(e.keyCode === 78) {
        n.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Т';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'т';
        };
    } else if(e.keyCode === 77) {
        m.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Ь';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'ь';
        };
    }  else if(e.keyCode === 188) {
        btn1_row5.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Б';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'б';
        };
    }  else if(e.keyCode === 190) {
        btn2_row5.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + 'Ю';
        } else if(e.shiftKey === false) {
            input.value = input.value + 'ю';
        };
    }  else if(e.keyCode === 191) {
        btn3_row5.style.boxShadow = '0 0 2px #333';
        if(e.shiftKey === true) {
            input.value = input.value + '.';
        } else if(e.shiftKey === false) {
            input.value = input.value + ',';
        };
    }

    lang_value = false;

} else if(lang_value === false) {
    span1.innerText = 'Q';
    span2.innerText = 'W';
    span3.innerText = 'E';
    span4.innerText = 'R';
    span5.innerText = 'T';
    span6.innerText = 'Y';
    span7.innerText = 'U';
    span8.innerText = 'I';
    span9.innerText = 'O';
    span10.innerText = 'P';
    span11.innerText = '{';
    span12.innerText = '[';
    span13.innerText = '}';
    span14.innerText = ']';
    span15.innerText = 'A';
    span16.innerText = 'S';
    span17.innerText = 'D';
    span18.innerText = 'F';
    span19.innerText = 'G';
    span20.innerText = 'H';
    span21.innerText = 'J';
    span22.innerText = 'K';
    span23.innerText = 'L';
    span24.innerText = ':';
    span25.innerText = ';';
    span26.innerText = '"';
    span27.innerText = `'`;
    span28.innerText = 'Z';
    span29.innerText = 'X';
    span30.innerText = 'C';
    span31.innerText = 'V';
    span32.innerText = 'B';
    span33.innerText = 'N';
    span34.innerText = 'M';
    span35.innerText = '<';
    span36.innerText = ',';
    span37.innerText = '>';
    span38.innerText = '.';

    lang_value = true;
}
};
