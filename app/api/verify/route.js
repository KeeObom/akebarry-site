import { NextResponse } from 'next/server'
// import { supabase } from '@/lib/supabaseClient'
import { supabase } from '../../../lib/supabaseClient'

export async function POST(req) {
  try {
    const { code } = await req.json()

    if (!code) {
      return NextResponse.json({ error: 'Certificate code is required.' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('code', code)
      .maybeSingle() // returns null if not found

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error.' }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json({ valid: false, message: 'Certificate not found.' })
    }

    return NextResponse.json({
      valid: data.valid,
      student_name: data.student_name,
      course_name: data.course_name,
      issued_date: data.issued_date,
      code: data.code,
      message: data.valid
        ? '✅ Certificate is valid.'
        : '❌ Certificate is invalid.',
    })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
