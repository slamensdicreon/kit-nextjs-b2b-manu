import { NextRequest, NextResponse } from 'next/server';

/**
 * Editing render API endpoint for XM Cloud Pages integration.
 * This enables the visual Page Editor to render components in preview mode.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const editingSecret = process.env.SITECORE_EDITING_SECRET;

    if (!editingSecret) {
      return NextResponse.json({ error: 'Editing secret not configured' }, { status: 500 });
    }

    const providedSecret = request.headers.get('x-editing-secret');
    if (providedSecret !== editingSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json({
      html: body.html || '',
      layoutData: body.layoutData || null,
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Editing render endpoint is active' });
}
